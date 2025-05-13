# Grandmasters Project

This project is a web application for displaying chess grandmaster statistics and profiles.
The live version can be viewed at [grandmasters.harlley.dev](https://grandmasters.harlley.dev).

## Local Development

### Prerequisites
*   Node.js (v18.x or later recommended)
*   npm

### Setup & Run
1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone https://github.com/harlley/grandmasters
    cd grandmasters
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

    The application will typically be available at `http://localhost:3000`.

## Storybook

This project uses Storybook for UI component development, visualization, and testing in an isolated environment. It's an important part of showcasing the component-based architecture.

*   **Run Storybook**:
    ```bash
    npm run storybook
    ```

    Storybook will typically be available at `http://localhost:6006`.

---

## TO DO

- [ ] Use Zod to validate data comming from API's
- [ ] Setup corretly the e2e tests using Playwright
- [ ] Fix: Skeleton profile is showing before the drawer is open on iPhone
- [ ] Fix: Intermitent error on dev mode related to server/client components
- [ ] Handle better the http errors from the API's
