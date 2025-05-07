"use client";
const isValidImageUrl = async (url) => {
  try {
    const response = await fetch(url, { method: "HEAD", mode: "no-cors" });
    return (
      response.ok && response.headers.get("Content-Type").startsWith("image/")
    );
  } catch {
    return false;
  }
};

const handleImageChange = (e) => {
  const file = e.target?.files?.[0];
  if (file) {
    const objectUrl = URL.createObjectURL(file);
    return objectUrl;
  }
};

export { isValidImageUrl, handleImageChange };
