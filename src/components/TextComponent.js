import React from "react";

export default function TextComponent({ label }) {
  // const options = {}; // these options accept all native `fetch` options
  // // the last argument below [] means it will fire onMount (GET by default)
  // const { loading, error, data = [] } = useFetch(
  //   "https://jsonplaceholder.typicode.com/posts",
  //   options,
  //   []
  // );

  return (
    <div>
      <h3>{`${label}`}</h3>
     

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere ut urna tincidunt efficitur. Vivamus nunc ante, tempor quis
        tellus placerat, tristique facilisis libero. Donec interdum neque vel
        elit condimentum sodales. Donec convallis, nulla et ultricies fringilla,
        arcu sem rhoncus quam, ut pulvinar quam nibh in risus. Nulla at iaculis
        ipsum, non pharetra arcu. Vivamus est nisi, pulvinar euismod dignissim
        eu, placerat ut nisl. Donec tristique lorem eu augue consequat
        hendrerit. Pellentesque sit amet gravida leo. Nulla tincidunt sagittis
        dui, nec luctus ipsum luctus nec.
      </p>
      <p>
        Nunc laoreet nulla sem. Mauris sit amet eros laoreet ipsum pretium
        facilisis nec et lacus. Mauris sit amet sem enim. Sed et consequat quam.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Nulla imperdiet, lacus in dapibus dignissim, quam nibh
        varius lacus, a venenatis elit urna vitae ex. Pellentesque viverra
        cursus nibh et imperdiet. Donec imperdiet elit cursus eros blandit, eu
        mollis risus finibus. Vestibulum diam metus, ultricies in elit vel,
        accumsan euismod metus. Praesent gravida augue molestie quam interdum,
        eget accumsan mauris molestie. Etiam convallis quam ac tempor
        pellentesque. Donec blandit nunc nec diam dapibus, iaculis aliquet nibh
        convallis.
      </p>
      <p>
        Vestibulum nec dolor sit amet turpis lacinia pharetra. In hac habitasse
        platea dictumst. Vivamus dapibus, sapien a volutpat euismod, arcu magna
        euismod orci, eu molestie est nibh nec neque. Suspendisse at mi ante.
        Maecenas et mi in est condimentum hendrerit id a lacus. Mauris venenatis
        imperdiet laoreet. Fusce in feugiat justo. Ut sagittis dui at magna
        laoreet, ut consequat lacus finibus. Maecenas imperdiet mauris non felis
        malesuada, non volutpat turpis accumsan. Nulla condimentum elit at
        tellus viverra ultrices. Etiam diam risus, sagittis sollicitudin blandit
        quis, condimentum vel enim. Nullam metus libero, condimentum id bibendum
        a, ultrices ac nisl. Nam mattis, sapien quis accumsan tristique, turpis
        lectus pretium diam, eu vehicula elit dolor quis dolor. Vestibulum
        viverra cursus tempus.
      </p>
      <p>
        Phasellus placerat sit amet ex eget auctor. Sed feugiat arcu eget ligula
        mollis, vel sagittis elit aliquam. Etiam molestie leo mi, non gravida
        justo rhoncus nec. Nulla dolor elit, imperdiet sed placerat eu,
        ullamcorper sed velit. Quisque augue urna, rhoncus sed ante et,
        elementum varius mi. Mauris eu lobortis tortor. Vivamus mattis imperdiet
        arcu, a sollicitudin nisi malesuada eget. Morbi eget dignissim metus,
        vehicula mattis nunc.
      </p>
    </div>
  );
}
