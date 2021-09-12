import emptyPlaceholder from "./../images/empty-todos.png";
const NoTodos = () => (
  <div className="empty-todos">
    <img className="pulse img-mid" src={emptyPlaceholder} alt="Empty Todos" />

    <h3 className="level3H">Your Day isn't planned yet</h3>
  </div>
);

export default NoTodos;
