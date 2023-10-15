console.clear();

export default function livePreviewZoom() {
  if (navigator.userAgent.includes(`Code`)) {
    document.body.style.zoom = "90%";
    console.log(`Zoomed in for VSCode`);
  }
}