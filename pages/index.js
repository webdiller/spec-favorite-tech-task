import MainContent from "@/blocks/MainContent/MainContent";
import DefaultLayout from "@/layouts/DefaultLayout";
import { data } from "@/base/data";

export default function Home({ users }) {
  return <MainContent title="Главная" users={users} />;
}

export async function getStaticProps() {
  return {
    props: {
      users: data.users,
    },
  };
}

Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout description="Website main page description" title="Главная">
      {page}
    </DefaultLayout>
  );
};
