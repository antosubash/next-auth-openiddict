import type { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { AbpApplicationConfigurationService } from "../generated/api";
import { prepareApiRequest } from "../lib/authUtil";
export default function ServerSidePage({ appConfig }: any) {
  return (
    <Layout>
      <h1>Server Side Rendering</h1>
      <p>
        This page uses the <strong>unstable_getServerSession()</strong> method
        in <strong>unstable_getServerSideProps()</strong>.
      </p>
      <p>
        Using <strong>unstable_getServerSession()</strong> in{" "}
        <strong>unstable_getServerSideProps()</strong> is the recommended
        approach if you need to support Server Side Rendering with
        authentication.
      </p>
      <p>
        The advantage of Server Side Rendering is this page does not require
        client side JavaScript.
      </p>
      <p>
        The disadvantage of Server Side Rendering is that this page is slower to
        render.
      </p>
      <pre>{JSON.stringify(appConfig?.currentUser, null, 2)}</pre>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await prepareApiRequest(context);
  var appConfig =
    await AbpApplicationConfigurationService.abpApplicationConfigurationGet();
  return {
    props: {
      appConfig,
    },
  };
}
