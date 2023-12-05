export const fetchTokenZeroImage = async (projectSlug: string) => {
  try {
    const response = await fetch(
      `/api/convertTokenZero?projectSlug=${encodeURIComponent(projectSlug)}`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error fetching PNG image:", error);
    return null;
  }
};
