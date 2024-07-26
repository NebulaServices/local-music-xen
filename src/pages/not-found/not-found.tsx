import { JSXElement } from 'solid-js'
import { MessageBanner } from '~/components/message-banner/message-banner'
import { Scaffold } from '~/components/scaffold/scaffold'

const NotFound = (): JSXElement => (
  <Scaffold title='Not found' topBar={false}>
    <MessageBanner
      title='Welcome to Snae Player!'
      message='Lets get your experience started.'
      button={{ href: '/', title: 'Get Started' }}
    />
  </Scaffold>
)

export default NotFound
