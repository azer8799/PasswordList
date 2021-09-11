import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletedTodos, showPassword} = props
  //   console.log(passwordDetails)

  const {passwords, usernames, websites, id} = passwordDetails

  const initial = websites ? websites[0].toUpperCase() : ''

  const deleteTodo = () => {
    deletedTodos(id)
  }

  return (
    <li className="each-item">
      <div className="each-card">
        <p className="initial-logo">{initial}</p>
        <div className="card-centerPart">
          <p className="item-heading">{websites}</p>
          <p className="item-desc"> {usernames} </p>
          {showPassword ? (
            <p className="item-desc"> {passwords} </p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="star-image"
            />
          )}
        </div>
        <button
          className="image-button"
          type="button"
          onClick={deleteTodo}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="del-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
