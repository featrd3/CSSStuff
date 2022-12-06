import "./index.css"

import { ModalGallery } from "./ModalGallery/ModalGallery"

function App() {
  const imagesInGallery = [
    "https://images.unsplash.com/photo-1668787088962-04516e2829cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80",
    "https://images.unsplash.com/photo-1668790364202-8a0670c90e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80",
    "https://images.unsplash.com/photo-1668718031554-9c05b5d03750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://plus.unsplash.com/premium_photo-1667621221108-d9ff42adee84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1667835949430-a2516cc93d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1668787088962-04516e2829cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80"
]
  return (
    <div>
      <div className="CONTAINER">
        <ModalGallery numberOfImagesToDisplay = {5} imagesInGallery = {imagesInGallery} />
      </div>
    </div>

  );
}

export default App;
