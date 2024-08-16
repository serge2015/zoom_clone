import { ClerkProvider, SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className="bg-dark-1 flex w-full h-screen items-center justify-center">
          <SignIn />
    </main>

  )
}

export default SignInPage