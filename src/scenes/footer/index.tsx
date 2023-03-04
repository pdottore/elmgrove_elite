import Logo from "@/assets/Logo.png";

type Props = {}

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gaap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                    Train Better, Live Better
                </p>
                <p>© Elmgrove Elite All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Home</p>
                <p className="my-5">About Us</p>
                <p>Contact</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">XX Elmgrove Road</p>
                <p className="my-5">Rochester, NY 14606</p>
                <p>(585) 426-4172</p>
            </div>
        </div>
    </footer>
  )
};

export default Footer;