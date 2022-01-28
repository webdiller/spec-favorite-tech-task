import MainContent from "@/blocks/MainContent/MainContent";
import DefaultLayout from "@/layouts/DefaultLayout";
import { data } from "@/base/data";
export default function Home({users}) {
  return (
    <DefaultLayout description="Website main page description" title="Home">
      <MainContent users={users} />
    </DefaultLayout>
  );
}
export async function getStaticProps() {
  return {
    props: {
      users: data.users,
    },
  };
}
