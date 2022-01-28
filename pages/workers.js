import MainContent from "@/blocks/MainContent/MainContent";
import DefaultLayout from "@/layouts/DefaultLayout";
import { data } from "@/base/data";

export default function Workers({ users }) {
  return <MainContent title="Работники" users={users} />;
}

export async function getStaticProps() {
  return {
    props: {
      users: data.users,
    },
  };
}

Workers.getLayout = function getLayout(page) {
  return (
    <DefaultLayout description="Website main page description" title="Работники">
      {page}
    </DefaultLayout>
  );
};