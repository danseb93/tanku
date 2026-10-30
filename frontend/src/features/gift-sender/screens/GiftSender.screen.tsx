import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "../components/Header";
import HostNidi from "../components/HostNidi";
import StepAIScan from "../components/steps/StepAIScan";
import StepCollaborators from "../components/steps/StepCollaborators";
import StepEnvelope from "../components/steps/StepEnvelope";
import StepOptions from "../components/steps/StepOptions";
import StepPayment from "../components/steps/StepPayment";
import StepRecipient from "../components/steps/StepRecipient";
import StepSuccess from "../components/steps/StepSuccess";
import StepCatalog from "../components/steps/StepCatalog";

export default function FirstScreenWorkshop({ onCompleteFlow }) {
  const [step, setStep] = useState(1);
  const [recipient, setRecipient] = useState({
    name: "",
    occasion: "Cumpleaños",
  });
  const [envelopeAmount, setEnvelopeAmount] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState(null);

  const [addCollaborators, setAddCollaborators] = useState(false);
  const [collaborators, setCollaborators] = useState([
    { name: "", email: "", amount: 0 },
  ]);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [invoiceId, setInvoiceId] = useState(null);

  // Valor total del producto o sobre
  const totalAmount = envelopeAmount || aiRecommendation?.price || 50000;

  // Cálculo de los aportes de los colaboradores en la "vaca"
  const totalCollaboratorsAmount = addCollaborators
    ? collaborators.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0)
    : 0;

  // Monto final a cobrar en el datáfono
  const userPaymentAmount = Math.max(
    0,
    totalAmount - totalCollaboratorsAmount
  );

  const handleStartScan = (profile) => {
    setIsScanning(true);
    setSelectedProfile(profile);
    setTimeout(() => {
      setIsScanning(false);
      setAiRecommendation({
        product: profile
          ? profile.recommended
          : "Gift Card Personalizada Tank❤️U",
        price: profile ? profile.price : 50000,
        reason: profile
          ? profile.reason
          : "Recomendado según patrones de interés generales.",
        tags: profile ? profile.tags : ["#Sorpresa", "#Especial"],
      });
    }, 2500);
  };

  const handleProcessPayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      const generatedId =
        "TANK❤️U-" + Math.floor(100000 + Math.random() * 900000);
      setInvoiceId(generatedId);
      setStep(5);
      if (onCompleteFlow)
        onCompleteFlow({
          recipient,
          envelopeAmount,
          aiRecommendation,
          collaborators,
          totalAmount,
          userPaymentAmount,
          invoiceId: generatedId,
        });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100/50 to-rose-100/60 text-slate-800 font-sans p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <Header />

      <motion.main
        layout
        className="w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-[2.5xl] shadow-2xl shadow-orange-950/10 border border-white p-6 md:p-8 z-10 relative overflow-hidden"
      >
        {/* Barra de Progreso Superior */}
        <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-orange-500 to-amber-400 h-full rounded-full"
            animate={{
              width: `${((step === "cat" ? 2 : step) / 5) * 100}%`,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>

        <HostNidi step={step} recipientName={recipient.name} />

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StepRecipient
                recipient={recipient}
                setRecipient={setRecipient}
                onNext={() => setStep(2)}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StepOptions setStep={setStep} recipientName={recipient.name} />
            </motion.div>
          )}

          {step === 20 && (
            <motion.div
              key="step20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StepEnvelope
                recipientName={recipient.name}
                envelopeAmount={envelopeAmount}
                setEnvelopeAmount={setEnvelopeAmount}
                onBack={() => setStep(2)}
                onNext={() => setStep(3)}
              />
            </motion.div>
          )}

          {step === 21 && (
            <motion.div
              key="step21"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StepAIScan
                isScanning={isScanning}
                aiRecommendation={aiRecommendation}
                onStartScan={handleStartScan}
                onResetScan={() => {
                  setAiRecommendation(null);
                  setStep(2);
                }}
                onNext={() => setStep(3)}
                onBack={() => setStep(2)}
              />
            </motion.div>
          )}

          {step === "cat" && (
            <motion.div
              key="stepCatalog"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StepCatalog
                onBack={() => setStep(2)}
                onSelectProduct={(product) => {
                  setAiRecommendation({
                    product: product.title,
                    price: product.price,
                    reason: product.description,
                    tags: [product.category],
                  });
                  setStep(3);
                }}
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StepCollaborators
                addCollaborators={addCollaborators}
                setAddCollaborators={setAddCollaborators}
                collaborators={collaborators}
                setCollaborators={setCollaborators}
                onNext={() => setStep(4)}
                onBack={() => setStep(2)}
              />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StepPayment
                amount={userPaymentAmount}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                isProcessingPayment={isProcessingPayment}
                onProcessPayment={handleProcessPayment}
              />
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <StepSuccess
                invoiceId={invoiceId}
                recipient={recipient}
                amount={userPaymentAmount}
                onRestart={() => setStep(1)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>
    </div>
  );
}