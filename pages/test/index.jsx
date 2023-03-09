import Layout from "@/components/layout/Layout";

const canvas = document.getElementById("signatureCanvas");
const signaturePad = new SignaturePad(canvas);
const signatureData = signaturePad.toDataURL();

canvas.addEventListener("touchstart", (e) => {
  // Prevent scrolling on mobile devices
  e.preventDefault();
});

canvas.addEventListener("touchmove", (e) => {
  // Prevent scrolling on mobile devices
  e.preventDefault();

  // Capture the signature as the user draws on the canvas
  const touch = e.touches[0];
  const point = { x: touch.clientX, y: touch.clientY };
  signaturePad.addPoint(point.x, point.y);
});

export default function Test() {
  return (
    <Layout>
      <div class='relative'>
        <canvas
          id='signatureCanvas'
          className ='w-full h-full bg-white border border-gray-300'
        ></canvas>
      </div>
    </Layout>
  );
}
