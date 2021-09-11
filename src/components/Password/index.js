import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import PasswordItem from '../PasswordItem'

class Password extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    search: '',
    passwordList: [],
    showPassword: false,
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const newPasswordList = {
      id: v4(),
      websites: website,
      usernames: username,
      passwords: password,
      //   showPasswords: false,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordList],
      website: '',
      username: '',
      password: '',
    }))
  }

  deletedTodos = clickedId => {
    const {passwordList} = this.state

    this.setState({
      passwordList: passwordList.filter(eachItem => eachItem.id !== clickedId),
    })
  }

  togglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  changeWebsite = event => {
    this.setState({website: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeSearch = event => {
    this.setState({search: event.target.value})
  }

  searchResults = () => {
    const {passwordList, search} = this.state

    const filteredResults = passwordList.filter(eachItem =>
      eachItem.websites.toLowerCase().includes(search.toLowerCase()),
    )
    return filteredResults
  }

  render() {
    const {
      website,
      username,
      password,
      search,
      passwordList,
      showPassword,
    } = this.state

    // console.log(showPassword)
    const Filtered = this.searchResults()
    // console.log(Filtered)

    return (
      <div className="password-app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="password-container-sm">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="pass-image"
          />
          <form className="form-container" onSubmit={this.onFormSubmit}>
            <h1 className="desc">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="logos"
              />

              <input
                type="text"
                value={website}
                className="input"
                placeholder="Enter Website"
                onChange={this.changeWebsite}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="logos"
              />

              <input
                type="text"
                value={username}
                className="input"
                placeholder="Enter Username"
                onChange={this.changeUsername}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="logos"
              />

              <input
                type="password"
                value={password}
                className="input"
                placeholder="Enter Password"
                onChange={this.changePassword}
              />
            </div>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>

        <div className="your-password-sm">
          <div className="top-desc">
            <div className="top-header">
              <h1 className="desc"> Your Passwords</h1>
              <p className="desc count-pass">{passwordList.length}</p>
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="logos"
              />

              <input
                type="search"
                value={search}
                className="input"
                placeholder="Search"
                onChange={this.changeSearch}
              />
            </div>
          </div>

          <div className="bottom-desc">
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox" id="show" />
              <label
                htmlFor="show"
                className="label"
                onClick={this.togglePassword}
              >
                Show Passwords
              </label>
            </div>

            <ul className="all-password-list">
              {Filtered.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  passwordDetails={eachItem}
                  deletedTodos={this.deletedTodos}
                  showPassword={showPassword}
                />
              ))}
            </ul>

            {Filtered.length === 0 ? (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-pass-image"
                />
                <p className="no-desc">No Passwords</p>
              </>
            ) : null}
          </div>
        </div>

        <div className="password-container-lg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="pass-image"
          />
          <form className="form-container" onSubmit={this.onFormSubmit}>
            <p className="desc">Add New Password</p>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="logos"
              />

              <input
                type="text"
                value={website}
                className="input"
                placeholder="Enter Website"
                onChange={this.changeWebsite}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="logos"
              />

              <input
                type="text"
                value={username}
                className="input"
                placeholder="Enter Username"
                onChange={this.changeUsername}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="logos"
              />

              <input
                type="password"
                value={password}
                className="input"
                placeholder="Enter Password"
                onChange={this.changePassword}
              />
            </div>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>

        <div className="your-password-lg">
          <div className="top-desc">
            <p className="desc"> Your Passwords</p>
            <p className="desc count-pass">{passwordList.length}</p>

            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="logos"
              />

              <input
                type="search"
                value={search}
                className="input"
                placeholder="Search"
                onChange={this.changeSearch}
              />
            </div>
          </div>

          <div className="bottom-desc">
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox" id="show-lg" />
              <label
                htmlFor="show-lg"
                className="label"
                onClick={this.togglePassword}
              >
                Show Password
              </label>
            </div>
            <ul className="all-password-list">
              {Filtered.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  passwordDetails={eachItem}
                  deletedTodos={this.deletedTodos}
                  showPassword={showPassword}
                />
              ))}
            </ul>

            {Filtered.length === 0 ? (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-pass-image"
                />
                <p className="no-desc">No Passwords</p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default Password
