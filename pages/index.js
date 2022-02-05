import { useState } from "react";
import { cardVariant, parentVariant } from "@root/motion";
import ProductModal from "@components/ProductModal ";
import { motion } from "framer-motion";
import ProductCard from "@components/ProductCard";
import { Box, SimpleGrid } from "@chakra-ui/react";

const MotionSimpleGrid = motion(SimpleGrid);
const MotionBox = motion(Box);

export default function Home() {
  const [modalData, setModalData] = useState(null);
  return (
    <Box>
      

    </Box>
  );
}
