import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gamesAPI } from '../../services/api';
import './ManageGames.css';

interface Game {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  order: number;
  isActive: boolean;
}

const ManageGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await gamesAPI.getAll();
      setGames(response.data.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch games');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this game?')) return;

    try {
      await gamesAPI.delete(id);
      setGames(games.filter((game) => game._id !== id));
    } catch (err: any) {
      alert(err.response?.data?.message || 'Failed to delete game');
    }
  };

  const moveGame = async (index: number, direction: 'up' | 'down') => {
    const newGames = [...games];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newGames.length) return;

    [newGames[index], newGames[targetIndex]] = [newGames[targetIndex], newGames[index]];

    const reorderData = newGames.map((game, idx) => ({
      id: game._id,
      order: idx,
    }));

    try {
      await gamesAPI.reorder(reorderData);
      setGames(newGames);
    } catch (err: any) {
      alert('Failed to reorder games');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="manage-container">
      <div className="manage-header">
        <h1>Manage Games</h1>
        <Link to="/admin/games/new" className="btn-add">
          + Add New Game
        </Link>
      </div>

      <div className="games-list">
        {games.length === 0 ? (
          <p>No games found. Add your first game!</p>
        ) : (
          games.map((game, index) => (
            <div key={game._id} className="game-item">
              <div className="game-order">
                <button
                  onClick={() => moveGame(index, 'up')}
                  disabled={index === 0}
                  className="btn-order"
                >
                  ↑
                </button>
                <span>{index + 1}</span>
                <button
                  onClick={() => moveGame(index, 'down')}
                  disabled={index === games.length - 1}
                  className="btn-order"
                >
                  ↓
                </button>
              </div>

              {game.image && (
                <img
                  src={`http://localhost:5000${game.image}`}
                  alt={game.title}
                  className="game-thumb"
                />
              )}

              <div className="game-info">
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <span className="game-category">{game.category}</span>
              </div>

              <div className="game-actions">
                <Link to={`/admin/games/edit/${game._id}`} className="btn-edit">
                  Edit
                </Link>
                <button onClick={() => handleDelete(game._id)} className="btn-delete">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageGames;
