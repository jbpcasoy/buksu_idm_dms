import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!router?.query?.unauthorized) return;

    enqueueSnackbar({
      variant: "error",
      anchorOrigin: {
        horizontal: "center",
        vertical: "top",
      },
      preventDuplicate: true,
      message: "Unauthorized",
    });
  }, [router?.query?.unauthorized, enqueueSnackbar]);

  useEffect(() => {
    const error = router?.query?.error;
    if (!error) return;

    enqueueSnackbar({
      variant: "error",
      anchorOrigin: {
        horizontal: "center",
        vertical: "top",
      },
      preventDuplicate: true,
      message:
        error === "OAuthSignin"
          ? "Error in constructing an authorization URL"
          : error === "OAuthCallback"
          ? "Error in handling the response from an OAuth provider"
          : error === "OAuthCreateAccount"
          ? " Could not create OAuth provider user in the database"
          : error === "EmailCreateAccount"
          ? "Could not create email provider user in the database"
          : error === "Callback"
          ? "Error in the OAuth callback handler route"
          : error === "OAuthAccountNotLinked"
          ? "Email on the account is already linked, but not with this OAuth account"
          : error === "EmailSignin"
          ? "Sending the e-mail with the verification token failed"
          : error === "CredentialsSignin"
          ? "Invalid Credentials"
          : error === "SessionRequired"
          ? "Unauthenticated"
          : error === "Default"
          ? "Something went wrong"
          : "Something went wrong",
    });
  }, [router?.query?.error, enqueueSnackbar]);

  return (
    <nav className='fixed top-0 z-50 w-full bg-CITLDarkBlue border-b border-CITLGray-main'>
      <div className='px-3 py-3 border-b border-CITLGray-main lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start'>
            <Link href='/' className='flex ml-2 md:mr-24'>
              <img
                src='/IMAGES/Logo.png'
                className='h-8 sm:h-10 mr-3'
                alt='BukSUIMD Logo'
              />
            </Link>
          </div>
        </div>
      </div>{" "}
      <div
        className='h-screen bg-cover bg-no-repeat bg-center'
        style={{ backgroundImage: "url('/IMAGES/DSC_6510.jpg')" }}
      >
        <div className='h-screen bg-gradient-to-t from-CITLDarkBlue'>
          <div className='h-screen flex justify-center'>
            <div className='flex items-center h-full  '>
              <div className='m-5 relative bg-white opacity-100 rounded-lg shadow-lg '>
                <div className='px-6 py-12 lg:px-8 '>
                  <div className='justify-center flex mb-8'>
                    <img src='/IMAGES/CITL.png' className='h-20 ' alt='CITL' />
                  </div>
                  <div className='space-y-4'>
                    <button
                      onClick={() => {
                        signIn(
                          "google",
                          {
                            callbackUrl:
                              "/api/login_role?role=FACULTY&redirect=/home",
                          },
                          { prompt: "login" }
                        ).catch((err) => {
                          signOut();
                        });
                      }}
                      className='w-full text-CITLDarkBlue  focus:ring-2 focus:ring-inset focus:ring-CITLDarkBlue bg-white/5 p-2 ring-1 ring-white/10 border  font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:text-CITLGray-main disabled:bg-CITLGray-lighter'
                    >
                      Login as Faculty
                    </button>
                    <button
                      onClick={() => {
                        signIn(
                          "google",
                          {
                            callbackUrl:
                              "/api/login_role?role=ADMIN&redirect=/admin",
                          },
                          { prompt: "login" }
                        ).catch((err) => {
                          signOut();
                        });
                      }}
                      className='w-full text-CITLWhite bg-CITLDarkBlue hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:text-CITLGray-main disabled:bg-CITLGray-lighter'
                    >
                      Login as Admin
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getServerSession(req, res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/home" } };
  }

  return {
    props: {},
  };
}
