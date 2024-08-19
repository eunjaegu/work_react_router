import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goArticles = () => {
        navigate("/articles", {replace:true});
    };
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>게시글</header>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goArticles}>게시글 목록</button>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;