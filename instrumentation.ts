import { registerOTel } from '@vercel/otel'
 
export function register() {
  registerOTel({ serviceName: 'hello-dynatrace-from-next' })
}