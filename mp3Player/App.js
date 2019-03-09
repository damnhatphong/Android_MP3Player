import React, { Component } from 'react';
import Player from './app/Player';

export const TRACKS = [
  {
    title: 'Hồng Nhan',
    artist: 'G5R',
    audioUrl: "http://dl43.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ3VtZFl4K0Jnc0Q2eHpxSVV1MmR1dkpjOUdMYTRPd2JXdkIrRlRvQ3puS2NqWkhnV2VvYkFUUUVMUCtzWnUvem5HLzRzZlNjaGxYa3U5eWNDNm1TUmluQVh3TzRyckdLZ0ZLQ1ZkOUFVeDlUL0J3ZkRBdkZ2N3ZIRG02Z2FKYlNjQmpUTUVNL0x2LzVkSjIxYkVhZkh0MEprRW9SbVM5S1ZPaitLaTdCbWs3Ymdwci9SQVhIVTZmb0FPbjVuNTF2WENzVzRwM2NoTmlBUDE4TFhvVk5Ca1JmSFlmQzlnTnpBTS9lYmlXVVpQbW5CTXFUem1ydnB5",
    albumArtUrl: "https://i.ytimg.com/vi/mZ3Ems-c9TU/maxresdefault.jpg",
  },
  {
    title: 'Anh là ai',
    artist: 'Phương Ly',
    albumArtUrl: "https://kenh14cdn.com/2016/10150751-776667059096829-2793350361644058124-n-1452680563900.jpg",
    audioUrl: 'http://dl15.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ2xsdDBGeXhFY0FLSnp0b1U2Mk9xbkhNVldFYWdKeTRPaEdOOVl5alBOWXRtSUR4bUFzcDBwZlNDRDNkMExpaExjcDRvM0Y4UmhCVkQra3VxbXFTRjNuUStvTzRyckRMZERlV0o1cGdVeDlTdURuN1NHbjBDOTRWdTA5VUNDZUNGRXNUUUdkcmliOEpGQTZtWEtVUGJ0N0lBTnVDbVI1YVZGdzgrU3NnZi93THMvdE9ONFMxZDljSzlMMEo3dzBNK2ZwMjBTdHFveHlSbWd2cXlyRnMxekg2bVhmRGxrRnhKVXVMNjlFa3BIbUd0TXRqM25vdWtnOW5BQVk2Vmg0Vyt4cEtPOE0yM0pMNUtpRzhBPQ%3D%3D',
  },
  {
    title: '24h',
    artist: 'Ly Ly',
    albumArtUrl: 'https://kenh14cdn.com/2018/12/26/anh-chup-man-hinh-2018-12-26-luc-075332-1545785626953515013160.png',
    audioUrl: 'http://dl35.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyaDJ6TjBGeUJZbENLaEZwNEVRMnZHektzcHdPSzRMeUlXZEhjZFk3QUhlWmUrR01RaUlySkVvUjB5bzU5ZzBsMjc0NHRoNFlJZDhSa1crbmUrdmt3NW1pQlA5STUyZk02RlplR051b1VVbWdRQ2UzS0tSNnpQKzlpK0x2aCtPYlRBUC9EZ0VNTDZkdXMwYzNWYkVhZkh0MEprRW9SbVM5NGxBMmMrTHZRWHp6STB5b2RCc1lVSmdUSjFjM3B2djF2N0ptbTRKanBBeWkzcTEvN3FmU0pNbFQrT2RkVDUxTURZZzJiSytEVWxRbm54SnRqN3dwL1p4cUdVUllhbG43WGE5OVBlME4yck5MSk9uSDhUWGVBPT0%3D',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}