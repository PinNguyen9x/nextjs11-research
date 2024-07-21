- <Link/> Di chuyển giữa các trang (Client side routing) nó không làm full page reload chỉ get file javascript về -> chạy file đó để chuyển qua trong mong muốn.
- prerendering -> tải những file html dc tạo phía server -> load javascript -> gắn event vào DOM (hydration).
  . SSG: default render của nextjs nó là build times tạo ta những file html -> forward lại cho user
  . SSR: (Run times) theo từng request tạo ta file html trả về cho user
  . ISR(Incremental static regenration)
  . CSR: ko render gì phía server mà đợi get file js về -> render phía client.
  -NextJs (client side rendering) là sự kết hơpj của (static generation + fetch )
  data on the client side

- Automatic static optimizaion
- SWR (stale-while-revalidate): React hooks for data fetching
