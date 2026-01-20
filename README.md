# OurGrid Website - Client

The frontend client for the OurGrid platform, providing a dashboard for monitoring energy loads, congestion, and municipality data.

## Tech Stack

* **Framework:** [React](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Routing:** [React Router DOM](https://reactrouter.com/)

## Project Structure

* `src/pages`: Contains main route views:
    * `Dashboard`: Main analytics view.
    * `CityChoice` / `AudienceChoice`: Onboarding flow.
    * `GridStressMap`: Visualization of grid congestion.
    * `MunicipalityLoadOverview`: Detailed load metrics.
* `src/components`: Reusable charts and layout components.
* `src/context`: React Context for state management (e.g., `AudienceContext`).

## Routes

* `/`: Landing Page
* `/dashboard`: Main User Dashboard
* `/audience`: Audience Selection
* `/city`: City Selection
* `/how-it-works`: Explainer Page
* `/what-is-congestion`: Educational Content
* `/faq` & `/privacy`: Static Information Pages

## Setup & Installation

1.  **Navigate to the client directory:**
    ```bash
    cd client
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will typically run on `http://localhost:5173`.

## Configuration

* **Tailwind Config:** Custom themes and color palettes are defined in `tailwind.config.js`.
* **Vite Config:** configured in `vite.config.js`.
