import Link from 'next/link';

export default function EditSuccessModal() {
  // const result = true;
  const result = false;
  return (
    <>
      <input
        type="checkbox"
        id="edit_success_modal"
        role="dialog"
        className="modal-toggle"
      />
      <div className=" modal modal-bottom sm:modal-middle">
        <div className="flex justify-center modal-box w-[98%] me-1 h-[365px] flex flex-col sm:w-[564px]">
          <p
            className={`flex justify-center font-bold ${
              result ? 'text-primary' : 'text-secondary'
            } text-primary text-h4`}
          >
            編輯結果
          </p>
          <p className={`flex justify-center font-bold mt-[30px] text-h5`}>
            {result ? '編輯完成' : '資料有誤'}
          </p>
          <div className="justify-center modal-action mt-[30px] ">
            <label
              htmlFor="edit_success_modal"
              className={`btn w-1/2 min-h-[30px] btn-sm sm:w-[135px] rounded-full border-dark  btn-primary btn bg-primary hover:bg-primary hover:shadow-xl3 hover:border-primary font-bold `}
            >
              繼續編輯
            </label>
            <Link
              href="/account-center/account-index"
              className="btn w-1/2 min-h-[25px] h-[32px] btn-sm sm:w-[135px] ml-4 rounded-full btn-outline bg-dark btn-md hover:bg-dark text-primary hover:text-primary hover:shadow-xl3 hover:border-dark "
            >
              返回會員中心
            </Link>
          </div>
        </div>

        {/* <form method="dialog" className="modal-backdrop">
        </form> */}
      </div>
    </>
  );
}
