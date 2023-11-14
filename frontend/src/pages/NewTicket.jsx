import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTicket } from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton'

const NewTicket = () => {
  const { user } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.tickets);

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({ product, description }))
      .unwrap()
      .then(() => {
        // We got a good response so navigate the user
        navigate('/tickets');
        toast.success('New ticket created!');
      })
      .catch(toast.error);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton />
      <section className="heading">
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>
      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            disabled
          ></input>
        </div>
      </section>
      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            disabled
          ></input>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="product">Product</label>
            <select
              name="product"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="iPhone">iPhone</option>
              <option value="iPad">iPad</option>
              <option value="Macbook Pro">Macbook Pro</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description of the issue</label>
            <textarea
              name="description"
              id="description"
              className="form-crontrol"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btl-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NewTicket;
