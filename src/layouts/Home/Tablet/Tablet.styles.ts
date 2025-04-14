import styled from "styled-components";

export const ContainerComponents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem;

  .retro {
   left: 7rem;
   position: absolute;

   @media (max-width: 1090px) {
    left: 4rem;
   }
  }

  .memory {
    left: 23rem;
    top: 26rem;
    position: absolute;

    @media (min-height: 923px) {
      top: 27rem;
    }
    @media (max-width: 1090px) {
    left: 17rem;
   }

    @media (max-width: 844px) {
      top: 28rem;
      left: 18rem;
    }
  }
  
  .skills {
    position: absolute;
    top: 36rem;
    left: 27rem;

    @media (max-width: 1090px) {
    left: 20rem;
   }

    @media (max-width: 934px) {
      left: 19rem;
    }

    @media (max-width: 874px) {
      left: 17rem;
    }

    @media (max-width: 844px) {
      left: 23rem;
      top: 37rem;
    }
  }

  .software {
    position: absolute;
    top: 37rem;
    left: 53rem;

    @media (max-width: 1090px) {
    left: 46rem;
   }

    @media (max-width: 934px) {
      left: 44rem;
    }

    @media (max-width: 874px) {
      left: 42rem;
    }

    @media (max-width: 844px) {
      display: none;
    }
  }

  .info {
    position: absolute;
    left: 13rem;
    top: 40rem;

    @media (min-height: 923px) {
      top: 43rem;
    }

    @media (max-width: 1090px) {
      left: 6rem;
     }

     @media (max-width: 844px) {
      left: 10rem;
      top: 40.5rem;
    }
  }

  .folder {
    position: absolute;
    left: 29rem;
    top: 28rem;

    @media (max-width: 1091px) {
    left: 20rem;
   }

   @media (max-width: 919px) {
    left: 18rem;
   }

   @media (max-width: 885px) {
    display: none;
   }
  }


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

