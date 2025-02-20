import React from 'react';
import scalaImage from '~/assets/images/stack/scala.png';
import javaImage from '~/assets/images/stack/java.png';
import rustImage from '~/assets/images/stack/rust.png';
import tsImage from '~/assets/images/stack/ts.png';
import jsImage from '~/assets/images/stack/js.png';
import zioImage from '~/assets/images/stack/zio.svg';
import akkaImage from '~/assets/images/stack/akka.svg';
import grafanaImage from '~/assets/images/stack/grafana.svg';
import gatlingImage from '~/assets/images/stack/gatling.svg';
import zapImage from '~/assets/images/stack/zap.svg';
import awsImage from '~/assets/images/stack/aws.svg';
import gcpImage from '~/assets/images/stack/gcp.svg';
import kubernetesImage from '~/assets/images/stack/kubernetes.svg';
import istioImage from '~/assets/images/stack/istio.svg';
import prometheusImage from '~/assets/images/stack/prometheus.svg';
import terraformImage from '~/assets/images/stack/terraform.svg';
import viteImage from '~/assets/images/stack/vite.svg';
import tailwindImage from '~/assets/images/stack/tailwind.svg';
import i18nextImage from '~/assets/images/stack/i18next.svg';
import solidJsImage from '~/assets/images/stack/solidjs.svg';
import wcImage from '~/assets/images/stack/webcomponents.svg';
import rnImage from '~/assets/images/stack/reactnative.svg';
import swiftImage from '~/assets/images/stack/swift.svg';
import swiftUiImage from '~/assets/images/stack/swiftui.svg';
import kotlinImage from '~/assets/images/stack/kotlin.svg';
import ajcImage from '~/assets/images/stack/ajc.svg';

import jotaiImage from '~/assets/images/stack/jotai.png';
import mysqlImage from '~/assets/images/stack/mysql.png';
import pgsqlImage from '~/assets/images/stack/pgsql.png';
import grpcImage from '~/assets/images/stack/grpc.png';
import { StackCard } from '../careerscard/StackCard';

const techStackList: {
  text: string;
  image: string;
  link: string;
  disabled?: boolean;
}[] = [
  {
    text: 'Scala',
    image: scalaImage.src,
    link: 'https://www.scala-lang.org/',
  },
  {
    text: 'Java',
    image: javaImage.src,
    link: 'https://www.oracle.com/java/',
  },
  {
    text: 'Rust',
    image: rustImage.src,
    link: 'https://www.rust-lang.org/',
  },
  {
    text: 'TypeScript',
    image: tsImage.src,
    link: 'https://www.typescriptlang.org/',
  },
  {
    text: 'JavaScript',
    image: jsImage.src,
    link: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
  },
  {
    text: 'ZIO',
    image: zioImage.src,
    link: 'https://zio.dev/',
  },
  {
    text: 'Akka',
    image: akkaImage.src,
    link: 'https://akka.io/',
  },
  {
    text: 'Grafana',
    image: grafanaImage.src,
    link: 'https://grafana.com/',
  },
  {
    text: 'MySQL',
    image: mysqlImage.src,
    link: 'https://www.mysql.com/',
  },
  {
    text: 'PostgreSQL',
    image: pgsqlImage.src,
    link: 'https://www.postgresql.org/',
  },
  {
    text: 'gRPC',
    image: grpcImage.src,
    link: 'https://grpc.io/',
  },
  {
    text: 'Gatling',
    image: gatlingImage.src,
    link: 'https://gatling.io/',
  },
  {
    text: 'ZAP',
    image: zapImage.src,
    link: 'https://www.zaproxy.org/',
  },
  {
    text: 'AWS',
    image: awsImage.src,
    link: 'https://aws.amazon.com/',
  },
  {
    text: 'GCP',
    image: gcpImage.src,
    link: 'https://cloud.google.com/',
  },
  {
    text: 'Kubernetes',
    image: kubernetesImage.src,
    link: 'https://kubernetes.io/',
  },
  {
    text: 'Istio',
    image: istioImage.src,
    link: 'https://istio.io/',
  },
  {
    text: 'Prometheus',
    image: prometheusImage.src,
    link: 'https://prometheus.io/',
  },
  {
    text: 'Terraform',
    image: terraformImage.src,
    link: 'https://www.terraform.io/',
  },
  {
    text: 'Vite',
    image: viteImage.src,
    link: 'https://vitejs.dev/',
  },
  {
    text: 'Tailwind',
    image: tailwindImage.src,
    link: 'https://tailwindcss.com/',
  },
  {
    text: 'i18next',
    image: i18nextImage.src,
    link: 'https://www.i18next.com/',
  },
  {
    text: 'Solid JS',
    image: solidJsImage.src,
    link: 'https://www.solidjs.com/',
  },
  {
    text: 'WebComponents',
    image: wcImage.src,
    link: 'https://www.webcomponents.org/',
  },
  {
    text: 'Jotai',
    image: jotaiImage.src,
    link: 'https://jotai.org/',
  },
  {
    text: 'React Native',
    image: rnImage.src,
    link: 'https://reactnative.dev/',
  },
  {
    text: 'Swift',
    image: swiftImage.src,
    link: 'https://developer.apple.com/swift/',
  },
  {
    text: 'SwiftUI',
    image: swiftUiImage.src,
    link: 'https://developer.apple.com/xcode/swiftui/',
  },
  {
    text: 'Kotlin',
    image: kotlinImage.src,
    link: 'https://kotlinlang.org/',
  },
  {
    text: 'Jetpack Compose',
    image: ajcImage.src,
    link: 'https://developer.android.com/jetpack/compose',
  },
];

export const TechStack: React.FC = () => {
  return (
    <div className="container mt-24 md:mt-32">
      <div className="overflow-hidden">
        <div className="mb-4 text-6xl text-white md:text-6xl-desktop">
          Our tech stack
        </div>
      </div>
      <div className="mb-16 max-w-[880px] text-lg text-white/80 md:mb-20">
        Join our dynamic team and work with cutting-edge technologies such as
        React, Node.js, MongoDB, AWS, and many more. Our tech stack is designed
        to empower our developers to create innovative solutions and deliver
        high-performing products to our customers.
      </div>
      <ul className="mb-25 mt-7 flex flex-col justify-start gap-0.5 overflow-hidden rounded-xl md:grid md:grid-cols-2 md:gap-1 lg:md:grid-cols-3 xl:md:grid-cols-4">
        {techStackList.map((techStackItem, index) => {
          return !techStackItem.disabled ? (
            <StackCard
              key={index}
              text={techStackItem.text}
              image={techStackItem.image}
              link={techStackItem.link}
            />
          ) : null;
        })}
      </ul>
    </div>
  );
};
