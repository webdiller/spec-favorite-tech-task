import MainContent from "@/blocks/MainContent/MainContent";
import DefaultLayout from "@/layouts/DefaultLayout";
import { data } from "@/base/data";

export default function Clients({users}) {
  return <MainContent users={users} title="Клиенты" />;
}

Clients.getLayout = function getLayout(page) {
  return (
    <DefaultLayout description="Website main page description" title="Клиенты">
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