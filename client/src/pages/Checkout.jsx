import React from "react";

const Checkout = () => {
  return (
    <div>
      <section class="bg-white py-8 antialiased md:py-16 h-screen ">
        <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0 ">
          <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 sm:text-base">
            <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200  sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden">
                <svg
                  class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Cart
              </span>
            </li>

            <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200  sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden">
                <svg
                  class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Checkout
              </span>
            </li>

            <li class="flex shrink-0 items-center">
              <svg
                class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Order summary
            </li>
          </ol>

          <div class="mt-6 sm:mt-28 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div class="min-w-0 flex-1 space-y-8">
              <div class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      for="your_name"
                      class="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="your_name"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 k:border-gray-600 "
                      placeholder="Bonnie Green"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="your_email"
                      class="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      E-main
                    </label>
                    <input
                      type="email"
                      id="your_email"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="phone-input-3"
                      class="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      Telefone
                    </label>
                    <div class="flex items-center">
                      <div
                        id="dropdown-phone-3"
                        class="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow "
                      ></div>
                      <div class="relative w-full">
                        <input
                          type="text"
                          id="phone-input"
                          class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          placeholder="123-456-7890"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      for="email"
                      class="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Endereço
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900 ">Payment</h3>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="credit-card"
                          aria-describedby="credit-card-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 "
                          checked
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="credit-card"
                          class="font-medium leading-none text-gray-900 "
                        >
                          {" "}
                          Credit Card{" "}
                        </label>
                        <p
                          id="credit-card-text"
                          class="mt-1 text-xs font-normal text-gray-500 "
                        >
                          Pay with your credit card
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="pay-on-delivery"
                          aria-describedby="pay-on-delivery-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 "
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="pay-on-delivery"
                          class="font-medium leading-none text-gray-900 "
                        >
                          {" "}
                          Payment on delivery{" "}
                        </label>
                        <p
                          id="pay-on-delivery-text"
                          class="mt-1 text-xs font-normal text-gray-500"
                        >
                          +$15 payment processing fee
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="paypal-2"
                          aria-describedby="paypal-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 "
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="paypal-2"
                          class="font-medium leading-none text-gray-900 "
                        >
                          {" "}
                          Paypal account{" "}
                        </label>
                        <p
                          id="paypal-text"
                          class="mt-1 text-xs font-normal text-gray-500"
                        >
                          Connect to your account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-emerald-100 border border-emerald-200 text-gray-800 py-2 rounded-md">
                  teste
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
