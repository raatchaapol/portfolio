import { GetStaticProps, NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import RcpHead from "../../components/base/RcpHead"

const Account: NextPage = () => {
	const router = useRouter()

	return (
		<>
			<RcpHead title='Account' />
			<main>
				Account
				<br />
				<button onClick={() => router.back()}>Back</button>
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'A title 12321'
    },
  }
}

export default Account
