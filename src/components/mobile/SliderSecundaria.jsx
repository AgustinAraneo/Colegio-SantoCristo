import { motion } from "framer-motion";
import images from "../imagesSecundariaM";
import Link from "next/link";
import Image from "next/image";

const SliderSecundaria = () => {
    return (
        <div className="pruebaMobile">
            <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -1800 }}
                    className="inner-carousel"
                >
                    {images.map((image, index) => {
                        return (
                            <motion.div className="text-center itemMobile" key={image.id}>
                                <Image
                                    className="shadow-lg"
                                    src={image.src}
                                    alt={image.alt}
                                    width={1200}
                                    height={600}
                                />
                                <Link href={image.url}>
                                    <button className="text-white bg-green-700 hover:bg-[#264133] rounded-l-full rounded-r-full w-[5.5rem] mt-3 font-Roboto-Regular">
                                        Más Info.
                                    </button>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SliderSecundaria;
