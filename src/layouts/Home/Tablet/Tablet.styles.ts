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
   @media (max-width: 742px) {
    left: 2rem;
   }

   @media (max-width: 690px) {
      left: 1rem;
   }
    @media (max-width: 666px) {
        left: 0.5rem;
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
        
    @media (max-width: 776px) {
      left: 17rem;
    }

    @media (max-width: 762px) {
      left: 16rem;
    }

    @media (max-width: 742px) {
      left: 15rem;
   }

   @media (max-width: 708px) {
      left: 14rem;
   }

    @media (max-width: 690px) {
      left: 13rem;
   }

   @media (max-width: 672px) {
      left: 12.6rem;  
  }
    @media (max-width: 666px) {
      left: 11.5rem;
    }
    @media (max-width: 612px) {
      left: 11.2rem;
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

    @media (max-width: 762px) {
      left: 21rem;
    }

    @media (max-width: 724px) {
      left: 17rem;
    } 
    @media (max-width: 672px) {
      left: 15rem;
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
    @media (max-width: 762px) {
      left: 8rem;
    } 

    @media (max-width: 724px) {
      left: 5rem;
    } 

    @media (max-width: 672px) {
      left: 4rem;
      top: 39rem;
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

