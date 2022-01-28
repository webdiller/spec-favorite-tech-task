import Filter from "@/blocks/Filter";
import Header from "@/blocks/Header/Header";
import Sidebar from "@/blocks/Sidebar/Sidebar";
import CustomHead from "./CustomHead";

export default function DefaultLayout({
  title = "website title",
  description = "website description",
  children,
}) {
  return (
    <>
      <CustomHead description={description} title={title} />
      <div className="site-area">
        <div className="site-area__container">
          <div className="site-area__sidebar">
            <Sidebar />
          </div>
          <div className="site-area__content">
            <Header customStyle={{gridArea:"header"}} />
            <Filter customStyle={{gridArea:"filter"}}/>
            <div className="site-area__scroll-content">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
