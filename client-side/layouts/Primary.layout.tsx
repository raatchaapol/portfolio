import Navbar from "../components/base/Navbar"

const PrimaryLayout: React.FC<React.ReactPortal> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default PrimaryLayout
