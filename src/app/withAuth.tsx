import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  const ProtectedComponent = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      if (!router.isReady) {
        return;
      }

      const token = sessionStorage.getItem("ff_session_token");
      if (!token) {
        router.replace({
          pathname: "/login",
          query: {
            error:
              typeof token === "undefined"
                ? "invalid session, please login"
                : "session expired, please login to continue",
          },
        });
      }
    }, [router.isReady]);

    return <WrappedComponent {...props} />;
  };

  return ProtectedComponent;
};

export default withAuth;
