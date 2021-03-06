import MainContent from "@/blocks/MainContent/MainContent";
import DefaultLayout from "@/layouts/DefaultLayout";
import { data } from "@/base/data";

export default function Analytics({users}) {
  return <MainContent users={users} title="Аналитика" />;
}

Analytics.getLayout = function getLayout(page) {
  return (
    <DefaultLayout
      description="Website main page description"
      title="Analitics"
    >
      {page}
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      users: data.users,
    },
  };
}