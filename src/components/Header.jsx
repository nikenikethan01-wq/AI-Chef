import logo from "../../public/chef-claude-icon.png"
export default function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="chef calude logo"></img>
      <h1>Chef Claude</h1>
    </header>
  )
}
