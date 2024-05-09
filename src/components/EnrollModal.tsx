import React, { useRef, useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnrollModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const fullNameRef = useRef<HTMLInputElement | null>(null);
  
  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
        fullNameRef.current?.focus();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    onClose();
    setModalOpen(false);
  };
  return (
    <dialog
      ref={modalRef}
      className="modal max-w-lg w-full py-8 px-16 rounded-3xl bg-[#F2F5F9]"
      onKeyDown={handleKeyDown}
    >
      <button onClick={handleCloseModal} className="absolute top-8 right-8">
        <IoClose className='w-8 h-8'/>
      </button>
      <div className="flex flex-col justify-center items-center gap-8">
        <img src={logo} alt="madrid software logo" />
        <form className="max-w-md w-full flex flex-col gap-8">
          <div>
            <label htmlFor="full_name" className="mb-2">
              Full Name<span className="text-red-600 font-bold ml-1">*</span>
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              ref={fullNameRef}
              className="border border-gray-300 focus:border-blue rounded-xl p-2 px-3 w-full focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2">
              Phone<span className="text-red-600 font-bold ml-1">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border border-gray-300 focus:border-blue rounded-xl p-2 px-3 w-full focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2">
              Email<span className="text-red-600 font-bold ml-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 focus:border-blue rounded-xl p-2 px-3 w-full focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue text-white w-full px-4 py-2 rounded-full hover:bg-blue/80 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default EnrollModal;
