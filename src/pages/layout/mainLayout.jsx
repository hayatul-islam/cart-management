import Header from "../../components/common/Header";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
