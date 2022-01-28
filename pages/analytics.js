import MainContent from "@/blocks/MainContent/MainContent";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Home() {
  return (
      <DefaultLayout description="Website main page description" title="Analitics">
        <MainContent/>
      </DefaultLayout>
  );
}