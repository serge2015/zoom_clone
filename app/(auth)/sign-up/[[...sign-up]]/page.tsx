import { ClerkProvider, SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <main className="bg-dark-1 flex w-full h-screen items-center justify-center">
        <SignUp />
    </main>

  )
}

export default SignUpPage