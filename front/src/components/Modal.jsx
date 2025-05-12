import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, children }) {
    return (
    <AnimatePresence>
        {isOpen && (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
            className="bg-background text-text_dark p-6 rounded-2xl max-w-3xl w-full relative shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-xl text-text_dark"
            >
                ✖
            </button>
            {children}
            </motion.div>
        </motion.div>
        )}
    </AnimatePresence>
    );
}
