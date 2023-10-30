function NavBar() {
  return (
    <nav className="flex rounded-lg bg-emerald-950/50 gap-x-16 py-2.5 px-5 items-center text-emerald-200/50 text-[17px] max-w-[810px] mx-auto">
      <div className="after:content-[''] after:absolute after:w-1 after:h-[30px] after:rounded relative after:right-[-30px] after:-top-[2px] after:bg-emerald-950 opacity-60">
        <ul className="flex gap-x-6 items-center">
          <li className="flex items-center gap-x-2 hover:text-white hover:fill-white fill-[#A7F3D0]/50 duration-300 ease-in-out transition-all cursor-pointer">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.74474 3.77401C7.74474 3.7024 7.71629 3.63372 7.66565 3.58308C7.61502 3.53245 7.54634 3.504 7.47473 3.504C7.40311 3.504 7.33443 3.53245 7.2838 3.58308C7.23316 3.63372 7.20471 3.7024 7.20471 3.77401V7.65676L10.0093 10.4613C10.0602 10.5105 10.1284 10.5377 10.1992 10.5371C10.27 10.5364 10.3377 10.508 10.3878 10.458C10.4378 10.4079 10.4662 10.3402 10.4668 10.2694C10.4675 10.1986 10.4402 10.1304 10.3911 10.0795L7.74474 7.43301V3.77401Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 7.5C15 11.642 11.6423 15 7.50009 15C3.35789 15 0 11.642 0 7.5C0 3.35803 3.35789 0 7.50009 0C11.6423 0 15 3.35803 15 7.5ZM14.46 7.5C14.46 11.3439 11.344 14.46 7.50009 14.46C3.65617 14.46 0.540028 11.3439 0.540028 7.5C0.540028 3.65613 3.65617 0.540022 7.50009 0.540022C11.344 0.540022 14.46 3.65613 14.46 7.5Z"
              />
            </svg>
            <span>time</span>
          </li>
          <li className="flex items-center gap-x-2 hover:text-white hover:fill-white fill-[#A7F3D0]/50 duration-300 ease-in-out transition-all cursor-pointer">
            <svg
              width="32"
              height="13"
              viewBox="0 0 32 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.93218 12.9936C9.30743 12.9936 8.75281 12.6076 8.52969 12.0223L8.08344 10.8324C8.00057 10.6201 7.79657 10.4786 7.57345 10.4786H3.88872C3.6656 10.4786 3.4616 10.6137 3.3851 10.8259L2.90698 12.0416C2.68386 12.6205 2.12924 13 1.51086 13H1.50449C0.675745 12.9936 0 12.3182 0 11.482C0 11.2955 0.0318748 11.1089 0.101999 10.9353L2.76673 3.96922C2.84323 3.76982 3.06635 3.67334 3.26398 3.75696C3.45523 3.83415 3.55085 4.05284 3.48073 4.24581L0.815994 11.2119C0.66937 11.5914 0.860619 12.0223 1.23674 12.1702C1.31962 12.2024 1.40887 12.2217 1.49811 12.2217H1.50449C1.80411 12.2217 2.07824 12.0352 2.18661 11.7522L2.66473 10.5365C2.86235 10.0283 3.34685 9.70029 3.88235 9.70029H7.56707C8.10894 9.70029 8.59981 10.0412 8.79106 10.5493L9.23731 11.7393C9.37118 12.1252 9.79193 12.3311 10.1744 12.196C10.5569 12.0609 10.7609 11.6364 10.6271 11.2504C10.6207 11.2376 10.6207 11.2247 10.6143 11.2183L6.9487 1.62791C6.68733 0.939667 5.91596 0.598761 5.23384 0.86248C4.99796 0.95253 4.78759 1.11334 4.64097 1.3256C4.52622 1.5057 4.29034 1.55716 4.11185 1.44138C3.93335 1.3256 3.88235 1.08761 3.9971 0.907506C4.00347 0.894642 4.00985 0.888209 4.01622 0.875345C4.69197 -0.0701852 5.99883 -0.282448 6.93595 0.399363C7.26107 0.637354 7.51607 0.965395 7.6627 1.35133L11.3219 10.9353C11.6215 11.7136 11.239 12.5883 10.4613 12.8907C10.3019 12.9614 10.1171 12.9936 9.93218 12.9936ZM6.81483 8.20803H4.65372C4.23935 8.20803 3.90147 7.86712 3.90147 7.44903C3.90147 7.35255 3.9206 7.2625 3.95247 7.17245L5.03621 4.38088C5.15096 4.09143 5.42509 3.89847 5.73746 3.89847C6.04983 3.89847 6.33033 4.09143 6.4387 4.38088L7.51607 7.17245C7.66907 7.56481 7.47145 8.0022 7.08258 8.15657C6.9997 8.18873 6.91045 8.20803 6.81483 8.20803ZM4.66647 7.43617H6.7957L5.73746 4.68963L4.66647 7.43617ZM3.5891 3.28098C3.37873 3.28098 3.2066 3.10731 3.2066 2.89505C3.2066 2.85002 3.21298 2.79857 3.2321 2.75354L3.45523 2.17464C3.52535 1.97525 3.7421 1.8659 3.9461 1.93665C4.14372 2.00741 4.2521 2.2261 4.18197 2.43193C4.18197 2.43836 4.1756 2.4448 4.1756 2.45123L3.95247 3.03012C3.88872 3.1845 3.74847 3.28098 3.5891 3.28098ZM15.6633 12.9936H13.2727C12.5013 12.9936 11.8765 12.3632 11.8765 11.5849V1.40921C11.8765 0.630921 12.5013 0.00700059 13.2727 0.000568409H14.1652C15.319 0.000568409 16.1478 0.0777549 16.696 0.232127C17.4929 0.444389 18.1431 0.849615 18.6212 1.44138C19.1057 2.03314 19.3671 2.77927 19.3544 3.5447C19.3607 4.04641 19.246 4.54169 19.0165 4.99194C18.8571 5.29425 18.6467 5.57083 18.4045 5.80883C18.9464 6.13687 19.3735 6.52923 19.6667 6.97948C20.0492 7.56481 20.2405 8.25949 20.2405 9.05064C20.2469 9.79034 20.0429 10.5107 19.654 11.1347C19.2906 11.7393 18.7615 12.2217 18.1367 12.5433C17.5248 12.8456 16.7151 12.9936 15.6633 12.9936ZM13.2727 0.77243C12.9284 0.77243 12.6415 1.05545 12.6415 1.40921V11.5914C12.6415 11.9387 12.922 12.2281 13.2727 12.2281H15.6633C16.5813 12.2281 17.2953 12.0995 17.7989 11.8486C18.8316 11.3083 19.4819 10.2277 19.4755 9.05064C19.4755 8.41386 19.3225 7.86069 19.0292 7.40401C18.787 7.03094 18.4172 6.7029 17.9327 6.41988C17.6076 6.23335 17.4929 5.81526 17.6777 5.48078C17.716 5.41646 17.7542 5.36501 17.8116 5.31355C18.0284 5.12058 18.2069 4.88902 18.3471 4.63174C18.5192 4.29726 18.6021 3.91777 18.5957 3.5447C18.6085 2.95937 18.4109 2.38691 18.0411 1.93022C17.6586 1.4671 17.155 1.15193 16.5048 0.978259C16.0203 0.843184 15.2361 0.77243 14.1715 0.77243H13.2727ZM15.1533 10.7745H15.0513C14.5731 10.7745 14.1907 10.3885 14.1907 9.90612V7.73848C14.1907 7.25606 14.5795 6.87013 15.0513 6.87013C16.0585 6.87013 16.7725 7.0438 17.2379 7.41044C17.7287 7.78994 17.971 8.31094 17.971 8.96059C17.971 9.54592 17.7415 10.0219 17.3144 10.3371C16.9128 10.633 16.2051 10.7745 15.1533 10.7745ZM15.0513 7.64199C15.0003 7.64199 14.9556 7.68702 14.9556 7.73848V9.90612C14.9556 9.95758 15.0003 10.0026 15.0513 10.0026H15.1533C16.2944 10.0026 16.7215 9.8225 16.8681 9.71316C17.104 9.54592 17.2124 9.3015 17.2124 8.96059C17.2124 8.54893 17.0721 8.25305 16.7725 8.02149C16.4538 7.77064 15.8609 7.64199 15.0513 7.64199ZM15.0768 5.5644H15.0513C14.5731 5.5644 14.1907 5.17204 14.1907 4.69606V3.08801C14.1907 2.6056 14.5795 2.21967 15.0513 2.21967H15.1724C15.7908 2.21967 16.2753 2.36118 16.6068 2.65063C16.9574 2.95294 17.1295 3.35816 17.1295 3.85344C17.1295 4.38088 16.9446 4.80541 16.5876 5.11415C16.237 5.41646 15.7334 5.5644 15.0768 5.5644ZM15.0513 2.99153C15.0003 2.99153 14.9556 3.03656 14.9556 3.08801V4.69606C14.9556 4.74752 15.0003 4.79254 15.0513 4.79254H15.0768C15.5421 4.79254 15.88 4.70249 16.084 4.52882C16.2753 4.36158 16.3645 4.14932 16.3645 3.84701C16.3645 3.57686 16.2816 3.38389 16.1095 3.22952C15.9246 3.06872 15.6059 2.9851 15.1724 2.9851L15.0513 2.99153ZM27.0107 12.9936C25.1109 12.9936 23.5363 12.3761 22.3187 11.1604C21.1011 9.94472 20.4827 8.36883 20.4827 6.47777C20.4827 5.25566 20.7632 4.14932 21.3178 3.19093C21.8725 2.23253 22.6757 1.45424 23.7085 0.875345C24.7285 0.296449 25.8759 0.000568409 27.0426 0.000568409C28.649 0.00700059 30.2045 0.560168 31.4604 1.57645C32.0851 2.08459 32.1808 3.0044 31.6772 3.63475C31.6389 3.68621 31.5943 3.73123 31.5433 3.77626L31.5369 3.78269C31.0078 4.2844 30.1982 4.32299 29.6308 3.87274C28.8212 3.22952 27.9606 2.91435 27.0043 2.91435C25.9907 2.91435 25.1683 3.24882 24.4798 3.94349C23.7913 4.63817 23.4598 5.46792 23.4598 6.47777C23.4598 7.18531 23.6128 7.81566 23.9125 8.35597C24.2121 8.88984 24.652 9.33366 25.1874 9.62311C25.7548 9.93828 26.3987 10.0991 27.0489 10.0862C27.5972 10.0927 28.1454 9.98331 28.649 9.75818C28.9869 9.59738 29.2993 9.39155 29.5862 9.15356C30.2109 8.63898 31.1289 8.72903 31.6389 9.35939C32.1489 9.98974 32.0596 10.916 31.4349 11.4305C31.4222 11.437 31.4158 11.4498 31.403 11.4563C30.9058 11.8679 30.3575 12.2088 29.771 12.4726C28.9614 12.8199 28.0371 12.9936 27.0107 12.9936ZM27.0426 0.77243C26.0098 0.765998 24.9898 1.03615 24.0846 1.54429C23.173 2.05887 22.4653 2.74068 21.9808 3.57686C21.4963 4.41304 21.2477 5.39073 21.2477 6.47777C21.2477 8.1823 21.7705 9.53306 22.8542 10.6137C23.9188 11.6814 25.3213 12.2217 27.0043 12.2217C27.9223 12.2217 28.751 12.0673 29.4587 11.765C29.9814 11.5335 30.4723 11.2247 30.9122 10.8581C31.2118 10.6201 31.2628 10.1827 31.0269 9.88039C31.0142 9.8611 30.995 9.8418 30.9823 9.82894C30.7337 9.57165 30.332 9.53949 30.0515 9.76461C29.7137 10.0412 29.3439 10.2792 28.9487 10.4657C28.3431 10.7359 27.6928 10.8645 27.0362 10.8581C26.2584 10.8645 25.4871 10.6716 24.805 10.2921C24.1483 9.93185 23.6001 9.38512 23.2303 8.72903C22.8606 8.07295 22.6757 7.31395 22.6757 6.47134C22.6757 5.25566 23.0965 4.22008 23.9252 3.39033C24.754 2.56058 25.7867 2.13605 26.9916 2.13605C28.1072 2.13605 29.1527 2.51555 30.0898 3.26168C30.3639 3.47394 30.7464 3.45465 30.995 3.21666L31.0014 3.21022C31.148 3.07515 31.2245 2.87575 31.2182 2.67635C31.2118 2.47696 31.1162 2.29042 30.9632 2.16821C29.8603 1.26771 28.4769 0.778862 27.0426 0.77243Z" />
            </svg>
            <span>words</span>
          </li>
          <li className="flex items-center gap-x-2 hover:text-white hover:fill-white fill-[#A7F3D0]/50 duration-300 ease-in-out transition-all cursor-pointer">
            <svg
              width="14"
              height="17"
              viewBox="0 0 14 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.45833 17H12.5417C12.9283 16.9996 13.299 16.8502 13.5724 16.5846C13.8458 16.319 13.9996 15.9589 14 15.5833V3.68333C14 3.64612 13.9925 3.60928 13.9778 3.5749C13.9631 3.54053 13.9417 3.50929 13.9146 3.48298L10.4146 0.0829813C10.3875 0.0566716 10.3553 0.035802 10.32 0.0215641C10.2846 0.0073261 10.2466 -1.35559e-06 10.2083 1.88107e-10H1.45833C1.07169 0.000421832 0.701012 0.149813 0.427615 0.415398C0.154219 0.680983 0.000434238 1.04107 0 1.41667V15.5833C0.000434238 15.9589 0.154219 16.319 0.427615 16.5846C0.701012 16.8502 1.07169 16.9996 1.45833 17ZM10.5 0.967335L13.0042 3.4H11.375C11.143 3.39975 10.9206 3.31011 10.7566 3.15076C10.5925 2.99141 10.5003 2.77536 10.5 2.55V0.967335ZM0.583333 1.41667C0.583603 1.19131 0.675877 0.975265 0.839913 0.815916C1.00395 0.656567 1.22635 0.566929 1.45833 0.566667H9.91667V2.55C9.9171 2.92559 10.0709 3.28568 10.3443 3.55127C10.6177 3.81685 10.9884 3.96624 11.375 3.96667H13.4167V15.5833C13.4164 15.8087 13.3241 16.0247 13.1601 16.1841C12.9961 16.3434 12.7736 16.4331 12.5417 16.4333H1.45833C1.22635 16.4331 1.00395 16.3434 0.839913 16.1841C0.675877 16.0247 0.583603 15.8087 0.583333 15.5833V1.41667Z" />
              <path d="M4.66667 5.38333C4.66667 5.45847 4.6974 5.53054 4.75209 5.58367C4.80679 5.63681 4.88098 5.66666 4.95833 5.66666H11.9583C12.0357 5.66666 12.1099 5.63681 12.1646 5.58367C12.2193 5.53054 12.25 5.45847 12.25 5.38333C12.25 5.30818 12.2193 5.23612 12.1646 5.18298C12.1099 5.12984 12.0357 5.09999 11.9583 5.09999H4.95833C4.88098 5.09999 4.80679 5.12984 4.75209 5.18298C4.6974 5.23612 4.66667 5.30818 4.66667 5.38333ZM2.04167 7.36666H7.875C7.95235 7.36666 8.02654 7.33681 8.08124 7.28367C8.13594 7.23054 8.16667 7.15847 8.16667 7.08333C8.16667 7.00818 8.13594 6.93612 8.08124 6.88298C8.02654 6.82985 7.95235 6.79999 7.875 6.79999H2.04167C1.96431 6.79999 1.89013 6.82985 1.83543 6.88298C1.78073 6.93612 1.75 7.00818 1.75 7.08333C1.75 7.15847 1.78073 7.23054 1.83543 7.28367C1.89013 7.33681 1.96431 7.36666 2.04167 7.36666ZM11.9583 8.49999H6.70833C6.63098 8.49999 6.55679 8.52985 6.50209 8.58298C6.4474 8.63612 6.41667 8.70818 6.41667 8.78333C6.41667 8.85847 6.4474 8.93054 6.50209 8.98367C6.55679 9.03681 6.63098 9.06666 6.70833 9.06666H11.9583C12.0357 9.06666 12.1099 9.03681 12.1646 8.98367C12.2193 8.93054 12.25 8.85847 12.25 8.78333C12.25 8.70818 12.2193 8.63612 12.1646 8.58298C12.1099 8.52985 12.0357 8.49999 11.9583 8.49999ZM2.04167 10.7667H9.04167C9.11902 10.7667 9.19321 10.7368 9.24791 10.6837C9.3026 10.6305 9.33333 10.5585 9.33333 10.4833C9.33333 10.4082 9.3026 10.3361 9.24791 10.283C9.19321 10.2298 9.11902 10.2 9.04167 10.2H2.04167C1.96431 10.2 1.89013 10.2298 1.83543 10.283C1.78073 10.3361 1.75 10.4082 1.75 10.4833C1.75 10.5585 1.78073 10.6305 1.83543 10.6837C1.89013 10.7368 1.96431 10.7667 2.04167 10.7667ZM2.04167 5.66666H3.79167C3.86902 5.66666 3.94321 5.63681 3.99791 5.58367C4.0526 5.53054 4.08333 5.45847 4.08333 5.38333C4.08333 5.30818 4.0526 5.23612 3.99791 5.18298C3.94321 5.12984 3.86902 5.09999 3.79167 5.09999H2.04167C1.96431 5.09999 1.89013 5.12984 1.83543 5.18298C1.78073 5.23612 1.75 5.30818 1.75 5.38333C1.75 5.45847 1.78073 5.53054 1.83543 5.58367C1.89013 5.63681 1.96431 5.66666 2.04167 5.66666ZM11.9583 6.79999H9.04167C8.96431 6.79999 8.89012 6.82985 8.83543 6.88298C8.78073 6.93612 8.75 7.00818 8.75 7.08333C8.75 7.15847 8.78073 7.23054 8.83543 7.28367C8.89012 7.33681 8.96431 7.36666 9.04167 7.36666H11.9583C12.0357 7.36666 12.1099 7.33681 12.1646 7.28367C12.2193 7.23054 12.25 7.15847 12.25 7.08333C12.25 7.00818 12.2193 6.93612 12.1646 6.88298C12.1099 6.82985 12.0357 6.79999 11.9583 6.79999ZM2.04167 9.06666H5.54167C5.61902 9.06666 5.69321 9.03681 5.74791 8.98367C5.8026 8.93054 5.83333 8.85847 5.83333 8.78333C5.83333 8.70818 5.8026 8.63612 5.74791 8.58298C5.69321 8.52985 5.61902 8.49999 5.54167 8.49999H2.04167C1.96431 8.49999 1.89013 8.52985 1.83543 8.58298C1.78073 8.63612 1.75 8.70818 1.75 8.78333C1.75 8.85847 1.78073 8.93054 1.83543 8.98367C1.89013 9.03681 1.96431 9.06666 2.04167 9.06666ZM11.9583 10.2H10.2083C10.131 10.2 10.0568 10.2298 10.0021 10.283C9.9474 10.3361 9.91667 10.4082 9.91667 10.4833C9.91667 10.5585 9.9474 10.6305 10.0021 10.6837C10.0568 10.7368 10.131 10.7667 10.2083 10.7667H11.9583C12.0357 10.7667 12.1099 10.7368 12.1646 10.6837C12.2193 10.6305 12.25 10.5585 12.25 10.4833C12.25 10.4082 12.2193 10.3361 12.1646 10.283C12.1099 10.2298 12.0357 10.2 11.9583 10.2ZM9.625 13.6H6.70833C6.63098 13.6 6.55679 13.6298 6.50209 13.683C6.4474 13.7361 6.41667 13.8082 6.41667 13.8833C6.41667 13.9585 6.4474 14.0305 6.50209 14.0837C6.55679 14.1368 6.63098 14.1667 6.70833 14.1667H9.625C9.70235 14.1667 9.77654 14.1368 9.83124 14.0837C9.88594 14.0305 9.91667 13.9585 9.91667 13.8833C9.91667 13.8082 9.88594 13.7361 9.83124 13.683C9.77654 13.6298 9.70235 13.6 9.625 13.6ZM2.04167 14.1667H5.54167C5.61902 14.1667 5.69321 14.1368 5.74791 14.0837C5.8026 14.0305 5.83333 13.9585 5.83333 13.8833C5.83333 13.8082 5.8026 13.7361 5.74791 13.683C5.69321 13.6298 5.61902 13.6 5.54167 13.6H2.04167C1.96431 13.6 1.89013 13.6298 1.83543 13.683C1.78073 13.7361 1.75 13.8082 1.75 13.8833C1.75 13.9585 1.78073 14.0305 1.83543 14.0837C1.89013 14.1368 1.96431 14.1667 2.04167 14.1667ZM2.04167 12.4667H4.375C4.45235 12.4667 4.52654 12.4368 4.58124 12.3837C4.63594 12.3305 4.66667 12.2585 4.66667 12.1833C4.66667 12.1082 4.63594 12.0361 4.58124 11.983C4.52654 11.9298 4.45235 11.9 4.375 11.9H2.04167C1.96431 11.9 1.89013 11.9298 1.83543 11.983C1.78073 12.0361 1.75 12.1082 1.75 12.1833C1.75 12.2585 1.78073 12.3305 1.83543 12.3837C1.89013 12.4368 1.96431 12.4667 2.04167 12.4667ZM2.04167 3.96666H5.54167C5.61902 3.96666 5.69321 3.93681 5.74791 3.88367C5.8026 3.83054 5.83333 3.75847 5.83333 3.68333C5.83333 3.60818 5.8026 3.53612 5.74791 3.48298C5.69321 3.42985 5.61902 3.39999 5.54167 3.39999H2.04167C1.96431 3.39999 1.89013 3.42985 1.83543 3.48298C1.78073 3.53612 1.75 3.60818 1.75 3.68333C1.75 3.75847 1.78073 3.83054 1.83543 3.88367C1.89013 3.93681 1.96431 3.96666 2.04167 3.96666ZM8.75 12.1833C8.75 12.1082 8.71927 12.0361 8.66457 11.983C8.60987 11.9298 8.53569 11.9 8.45833 11.9H5.54167C5.46431 11.9 5.39012 11.9298 5.33543 11.983C5.28073 12.0361 5.25 12.1082 5.25 12.1833C5.25 12.2585 5.28073 12.3305 5.33543 12.3837C5.39012 12.4368 5.46431 12.4667 5.54167 12.4667H8.45833C8.53569 12.4667 8.60987 12.4368 8.66457 12.3837C8.71927 12.3305 8.75 12.2585 8.75 12.1833ZM11.9583 11.9H9.625C9.54764 11.9 9.47346 11.9298 9.41876 11.983C9.36406 12.0361 9.33333 12.1082 9.33333 12.1833C9.33333 12.2585 9.36406 12.3305 9.41876 12.3837C9.47346 12.4368 9.54764 12.4667 9.625 12.4667H11.9583C12.0357 12.4667 12.1099 12.4368 12.1646 12.3837C12.2193 12.3305 12.25 12.2585 12.25 12.1833C12.25 12.1082 12.2193 12.0361 12.1646 11.983C12.1099 11.9298 12.0357 11.9 11.9583 11.9ZM11.9583 13.6H10.7917C10.7143 13.6 10.6401 13.6298 10.5854 13.683C10.5307 13.7361 10.5 13.8082 10.5 13.8833C10.5 13.9585 10.5307 14.0305 10.5854 14.0837C10.6401 14.1368 10.7143 14.1667 10.7917 14.1667H11.9583C12.0357 14.1667 12.1099 14.1368 12.1646 14.0837C12.2193 14.0305 12.25 13.9585 12.25 13.8833C12.25 13.8082 12.2193 13.7361 12.1646 13.683C12.1099 13.6298 12.0357 13.6 11.9583 13.6Z" />
            </svg>
            <span>file</span>
          </li>
        </ul>
      </div>
      <div className="after:content-[''] after:absolute after:w-1 after:h-[30px] after:rounded relative after:right-[-30px] after:-top-[2px] after:bg-emerald-950 opacity-60">
        <ul className="flex gap-x-6 items-center">
          <li className="flex items-center gap-x-2 hover:text-white hover:fill-white fill-[#A7F3D0]/50 duration-300 ease-in-out transition-all cursor-pointer">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.77778 12.4444H9.33333C9.53961 12.4444 9.73744 12.5264 9.88331 12.6722C10.0292 12.8181 10.1111 13.0159 10.1111 13.2222C10.1111 13.4285 10.0292 13.6263 9.88331 13.7722C9.73744 13.9181 9.53961 14 9.33333 14H4.66667C4.46039 14 4.26256 13.9181 4.11669 13.7722C3.97083 13.6263 3.88889 13.4285 3.88889 13.2222C3.88889 13.0159 3.97083 12.8181 4.11669 12.6722C4.26256 12.5264 4.46039 12.4444 4.66667 12.4444H6.22222V1.55556H1.55556V3.11111C1.55556 3.31739 1.47361 3.51522 1.32775 3.66108C1.18189 3.80694 0.984057 3.88889 0.777778 3.88889C0.571498 3.88889 0.373667 3.80694 0.227806 3.66108C0.0819442 3.51522 0 3.31739 0 3.11111V0.777778C0 0.571498 0.0819442 0.373667 0.227806 0.227806C0.373667 0.0819442 0.571498 0 0.777778 0H13.2222C13.4285 0 13.6263 0.0819442 13.7722 0.227806C13.9181 0.373667 14 0.571498 14 0.777778V3.11111C14 3.31739 13.9181 3.51522 13.7722 3.66108C13.6263 3.80694 13.4285 3.88889 13.2222 3.88889C13.0159 3.88889 12.8181 3.80694 12.6722 3.66108C12.5264 3.51522 12.4444 3.31739 12.4444 3.11111V1.55556H7.77778V12.4444Z"
              />
            </svg>
            <span>text</span>
          </li>
          <li className="flex items-center gap-x-2 hover:text-white hover:fill-white fill-[#A7F3D0]/50 duration-300 ease-in-out transition-all cursor-pointer">
            <svg
              width="23"
              height="14"
              viewBox="0 0 23 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9203 0.392157C15.9203 0.28815 15.9618 0.188404 16.0356 0.11486C16.1093 0.0413165 16.2094 0 16.3137 0H22.6068C22.6816 2.79321e-05 22.7547 0.0212853 22.8178 0.0612829C22.8809 0.101281 22.9312 0.158363 22.9629 0.225845C22.9946 0.293328 23.0063 0.368417 22.9968 0.44232C22.9872 0.516224 22.9567 0.585881 22.9089 0.643137L19.8866 4.25961C19.6939 4.49019 19.8213 4.84784 20.1061 4.94823C21.0688 5.28661 21.8805 5.95334 22.398 6.83064C22.9154 7.70794 23.1052 8.73934 22.9338 9.74263C22.7624 10.7459 22.2408 11.6565 21.4613 12.3136C20.6817 12.9706 19.6944 13.3318 18.6736 13.3333C17.7373 13.3346 16.826 13.0317 16.0777 12.4706C16.0364 12.4397 16.0015 12.401 15.9752 12.3567C15.9489 12.3123 15.9316 12.2633 15.9243 12.2123C15.917 12.1613 15.9198 12.1094 15.9327 12.0595C15.9455 12.0096 15.968 11.9628 15.999 11.9216C16.03 11.8804 16.0688 11.8457 16.1133 11.8194C16.1577 11.7932 16.2069 11.7759 16.258 11.7686C16.3092 11.7614 16.3612 11.7642 16.4113 11.777C16.4613 11.7898 16.5083 11.8122 16.5497 11.8431C16.9984 12.1787 17.5207 12.4031 18.0734 12.4979C18.6262 12.5927 19.1937 12.5552 19.7291 12.3885C20.2645 12.2217 20.7525 11.9305 21.1528 11.5388C21.5532 11.1472 21.8545 10.6662 22.0318 10.1357C22.2092 9.60516 22.2576 9.04019 22.173 8.48734C22.0884 7.93449 21.8733 7.4096 21.5453 6.95592C21.2173 6.50224 20.7859 6.13276 20.2867 5.87792C19.7874 5.62309 19.2345 5.49019 18.6736 5.49019C18.5989 5.49017 18.5257 5.46891 18.4626 5.42891C18.3996 5.38891 18.3492 5.33183 18.3176 5.26435C18.2859 5.19687 18.2741 5.12178 18.2837 5.04787C18.2932 4.97397 18.3237 4.90431 18.3715 4.84706L21.2294 1.42745C21.2772 1.37019 21.3077 1.30054 21.3173 1.22663C21.3268 1.15273 21.3151 1.07764 21.2834 1.01016C21.2517 0.942676 21.2014 0.885594 21.1383 0.845597C21.0753 0.805599 21.0021 0.784341 20.9273 0.784313H16.3137C16.2094 0.784313 16.1093 0.742997 16.0356 0.669453C15.9618 0.59591 15.9203 0.496163 15.9203 0.392157Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5663 1.58821C12.1813 1.20426 11.6907 0.942782 11.1566 0.836845C10.6225 0.730908 10.0689 0.785271 9.56578 0.993058C9.06268 1.20084 8.63267 1.55272 8.33015 2.00419C8.02763 2.45565 7.86618 2.98643 7.86622 3.52939C7.86622 3.6334 7.82478 3.73314 7.75102 3.80669C7.67726 3.88023 7.57722 3.92155 7.4729 3.92155C7.36859 3.92155 7.26855 3.88023 7.19479 3.80669C7.12103 3.73314 7.07959 3.6334 7.07959 3.52939C7.07959 2.94898 7.22316 2.37752 7.49758 1.86564C7.77199 1.35376 8.16879 0.917264 8.65281 0.594806C9.13683 0.272347 9.69314 0.0738837 10.2725 0.0169949C10.8518 -0.0398938 11.4362 0.046548 11.974 0.268664C12.5119 0.490779 12.9864 0.841713 13.3557 1.29038C13.725 1.73904 13.9776 2.2716 14.0912 2.84086C14.2048 3.41012 14.1758 3.99852 14.0068 4.55394C13.8378 5.10937 13.5341 5.61467 13.1225 6.02508L8.67251 10.462C8.41686 10.7169 8.21407 11.0195 8.07573 11.3526C7.93738 11.6857 7.86619 12.0426 7.86622 12.4031C7.86622 12.4839 7.93151 12.549 8.01253 12.549H13.7659C13.8702 12.549 13.9703 12.5903 14.044 12.6639C14.1178 12.7374 14.1592 12.8372 14.1592 12.9412C14.1592 13.0452 14.1178 13.1449 14.044 13.2185C13.9703 13.292 13.8702 13.3333 13.7659 13.3333H7.4729C7.36859 13.3333 7.26855 13.292 7.19479 13.2185C7.12103 13.1449 7.07959 13.0452 7.07959 12.9412V12.4031C7.07959 11.9396 7.17114 11.4807 7.34903 11.0525C7.52692 10.6243 7.78766 10.2352 8.11636 9.90744L12.5663 5.47057C12.822 5.21566 13.0248 4.91303 13.1632 4.57996C13.3016 4.24689 13.3728 3.88991 13.3728 3.52939C13.3728 3.16887 13.3016 2.81189 13.1632 2.47882C13.0248 2.14575 12.822 1.84312 12.5663 1.58821Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.26641 0.029964C3.34732 0.0596068 3.41648 0.109859 3.46515 0.174361C3.51382 0.238863 3.53981 0.314714 3.53982 0.392313V12.9412C3.53982 13.0452 3.49321 13.1449 3.41025 13.2185C3.32728 13.292 3.21475 13.3333 3.09741 13.3333C2.98008 13.3333 2.86755 13.292 2.78458 13.2185C2.70162 13.1449 2.65501 13.0452 2.65501 12.9412V2.28562C2.65499 2.20803 2.629 2.13218 2.58033 2.06768C2.53166 2.00319 2.4625 1.95294 2.3816 1.92329C2.3007 1.89365 2.2117 1.88595 2.12586 1.90117C2.04001 1.91638 1.9612 1.95383 1.89937 2.00876L0.756192 3.02287C0.673119 3.0965 0.560449 3.13787 0.442967 3.13787C0.325485 3.13787 0.212814 3.0965 0.129742 3.02287C0.0466693 2.94923 8.7531e-10 2.84936 0 2.74523C-8.75309e-10 2.64109 0.0466693 2.54122 0.129742 2.46758L2.78419 0.114669C2.84611 0.0598597 2.92497 0.0225578 3.01081 0.00748036C3.09664 -0.00759709 3.1856 0.000227333 3.26641 0.029964Z"
              />
            </svg>
            <span>numbers</span>
          </li>
          <li className="flex items-center gap-x-2 hover:text-white hover:fill-white fill-[#A7F3D0]/50 duration-300 ease-in-out transition-all cursor-pointer">
            <span>!@#</span>
            <span>specials</span>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-x-3.5 items-center">
          <li className="hover:text-white hover:fill-white fill-[#A7F3D0]/50 duration-300 ease-in-out transition-all cursor-pointer">
            <span>10</span>
          </li>
          <li className="hover:text-white hover:fill-white fill-[#A7F3D0]/50 duration-300 ease-in-out transition-all cursor-pointer">
            <span>25</span>
          </li>
          <li className="hover:text-white hover:fill-white fill-[#A7F3D0]/50 duration-300 ease-in-out transition-all cursor-pointer">
            <span>50</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
