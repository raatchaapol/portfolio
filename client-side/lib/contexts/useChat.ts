const useChat = () => {
  const subscribeChat = (title: string) => title
  const unSubscribeChat = () => {
    console.log('unsubscribed')
  }

  return { subscribeChat, unSubscribeChat } as const
}

export default useChat
