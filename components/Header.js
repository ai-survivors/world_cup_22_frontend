import Head from "next/head";
import Nav from './Nav';
const Header = () => {

  return (
    <>
            <Head>
            <title>World Cup 2022</title>
            <link rel="icon" href="./trophy.png" />
        </Head>
        <Nav/>
<section>
<div className="h-screen bg-center w-full m-0 p-0 bg-cover bg-[url('https://www.arabianbusiness.com/cloud/2021/09/14/LY4IwBhW-al-wakrah-stadium-3.jpg')]">
<div className="container text-center break-normal md:pt-32">
<p className="float-left pl-10 mt-10 font-bold text-white pt-96 md:text-6xl">
World Cup Qatar 2022™
</p>
<p className="pt-3 text-xl text-white md:text-2xl"></p>
</div>
</div>
</section>
</>
    )
}
export default Header
