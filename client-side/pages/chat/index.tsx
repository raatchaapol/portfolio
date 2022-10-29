import { GetStaticProps, NextPage } from "next"
import { useEffect, useState } from "react"
import RcpHead from "../../components/base/RcpHead"
import useChatExample from "../../lib/contexts/useChatExample"

interface IChat {
  title: string
}

const Chat: NextPage<IChat> = ({ title }) => {
  const { isConnected, lastPong, sendPing } = useChatExample()
  const [text, setText] = useState('')

  useEffect(
    () => {},
    []
  )

	return (
		<main>
			<RcpHead title='Chat' />
      <section>
        <h1>{title}</h1>
      </section>
      <div>
        <input 
          type="text" 
          title="message" 
          placeholder="put your message here"
          value={text}
          onInput={({ currentTarget: { value } }) => setText(value)}
        />
        <button onClick={ () => sendPing(text) }>Send</button>
      </div>
    </main>
	)
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'SIMPLE CHAT'
    },
  }
}

export default Chat
