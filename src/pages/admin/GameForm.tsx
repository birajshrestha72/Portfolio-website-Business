import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { gamesAPI } from '../../services/api';
import './GameForm.css';

const GameForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'arcade',
    isActive: true,
  });
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEditMode) {
      fetchGame();
    }
  }, [id]);

  const fetchGame = async () => {
    try {
      const response = await gamesAPI.getOne(id!);
      const game = response.data.data;
      setFormData({
        title: game.title,
        description: game.description,
        category: game.category,
        isActive: game.isActive,
      });
      if (game.image) {
        setPreview(`http://localhost:5000${game.image}`);
      }
    } catch (err: any) {
      setError('Failed to fetch game details');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('category', formData.category);
    data.append('isActive', formData.isActive.toString());
    if (image) {
      data.append('image', image);
    }

    try {
      if (isEditMode) {
        await gamesAPI.update(id!, data);
      } else {
        await gamesAPI.create(data);
      }
      navigate('/admin/games');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save game');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>{isEditMode ? 'Edit Game' : 'Add New Game'}</h1>
        <button onClick={() => navigate('/admin/games')} className="btn-back">
          ← Back
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="game-form">
        <div className="form-group">
          <label htmlFor="title">Game Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter game title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Enter game description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="arcade">Arcade</option>
            <option value="carnival">Carnival</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="image">Game Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
            />
            Active
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" disabled={loading} className="btn-submit">
            {loading ? 'Saving...' : isEditMode ? 'Update Game' : 'Add Game'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/games')}
            className="btn-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default GameForm;
