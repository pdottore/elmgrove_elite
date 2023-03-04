import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { 
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon 
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "New equipment and staff that are trained to help you reach your fitness goals. New equipment and staff that are trained to help you reach your fitness goals.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Novice or Vet, we offer classes for any of your needs. Bring the children with our new daycare and kids friendly classes. We also offer classes early mornings for our elderly members.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Know you are in the best hands with our staff members that have worked with some of the best athletes. Our trainers have a passion for helping athletes meet their training goals. ",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <HText >MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. 
                    We provide true care into each and every member. 
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title} 
                        icon={benefit.icon} 
                        title={benefit.title} 
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <HText>
                                    HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="my-5 ">
                            Every workout, for everyone. At our private gym on Elmgrove Road, you get all the support you need to reach your fitness goals and feel good while doing so.
                            You'll have a trainer to guide you through your fitness plan and provide you with proven workouts that are both effective and fun.
                            Other gyms make exercise feel like work. We want to help you see that fitness done right is leisure.
                        </p>
                        <p className="mb-5">
                            Our gym uses only the best equipment. They're adjustable, convenient, and allow you to perform a wide range of exercises and activities.
                            We know you will love your Elite experience. In fact, just take 12 classes during your first 30 days and if you don't feel like you're living a more 
                            vibrant, happier, healthier life, take back all your money and walk away. The first class may be taken at no charge.
                        </p>

                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  );
};

export default Benefits