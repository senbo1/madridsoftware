import React, { useRef, useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { IoClose } from 'react-icons/io5';
import { Input } from './ui/input';
import { Button } from './ui/button';

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
      className="modal max-w-lg w-full py-8 px-16 rounded-3xl bg-[#19223D] text-white backdrop-opacity-75"
      onKeyDown={handleKeyDown}
    >
      <button onClick={handleCloseModal} className="absolute top-8 right-8">
        <IoClose className="w-8 h-8" />
      </button>
      <div className="flex flex-col justify-center items-center gap-8">
        <img src={logo} alt="madrid software logo" />
        <form className="max-w-md w-full flex flex-col gap-8">
          <div>
            <label htmlFor="full_name" className="mb-2 text-white">
              Full Name<span className="text-red-700 font-bold ml-1">*</span>
            </label>
            <Input
              type="text"
              id="full_name"
              name="full_name"
              ref={fullNameRef}
              required
              className='rounded-xl'
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2">
              Phone<span className="text-red-700 font-bold ml-1">*</span>
            </label>
            <Input type="tel" id="phone" name="phone" required className='rounded-xl'/>
          </div>
          <div>
            <label htmlFor="email" className="mb-2">
              Email<span className="text-red-700 font-bold ml-1">*</span>
            </label>
            <Input type="email" id="email" name="email" required className='rounded-xl'/>
          </div>
          <Button className='rounded-xl py-5' variant={'gradient-2'}>Submit</Button>
        </form>
      </div>
    </dialog>
  );
};

export default EnrollModal;
