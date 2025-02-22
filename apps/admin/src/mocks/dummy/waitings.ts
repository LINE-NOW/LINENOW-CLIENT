//전체
export const dummyWaitingsResponse = [
  {
    id: 1,
    waiting_status: "waiting",
    party_size: 4,
    user: {
      user_id: 1,
      name: "John Smith",
      phone_number: "010-1234-5678",
    },
    confirm_due_time: undefined,
    arrival_due_time: undefined,
    registered_at: "2024-09-29T12:00:00Z",
  },
  {
    id: 2,
    waiting_status: "ready_to_confirm",
    party_size: 6,
    user: {
      user_id: 2,
      name: "Jane Doe",
      phone_number: "010-9876-5432",
    },
    confirm_due_time: "2024-10-01T14:45:00Z",
    arrival_due_time: undefined,
    registered_at: "2024-09-29T12:05:00Z",
  },
  {
    id: 3,
    waiting_status: "confirmed",
    party_size: 2,
    user: {
      user_id: 3,
      name: "Alice Kim",
      phone_number: "010-2222-3333",
    },
    confirm_due_time: "2024-10-01T15:00:00Z",
    arrival_due_time: "2024-10-01T15:05:00Z",
    registered_at: "2024-09-29T12:10:00Z",
  },
  {
    id: 4,
    waiting_status: "waiting",
    party_size: 3,
    user: {
      user_id: 4,
      name: "Bob Lee",
      phone_number: "010-4444-5555",
    },
    confirm_due_time: undefined,
    arrival_due_time: undefined,
    registered_at: "2024-09-29T12:15:00Z",
  },
  {
    id: 5,
    waiting_status: "confirmed",
    party_size: 2,
    user: {
      user_id: 5,
      name: "Charlie Park",
      phone_number: "010-6666-7777",
    },
    confirm_due_time: "2024-10-01T15:20:00Z",
    arrival_due_time: "2024-10-01T15:25:00Z",
    registered_at: "2024-09-29T12:20:00Z",
  },
  {
    id: 6,
    waiting_status: "waiting",
    party_size: 5,
    user: {
      user_id: 6,
      name: "David Choi",
      phone_number: "010-8888-9999",
    },
    confirm_due_time: undefined,
    arrival_due_time: undefined,
    registered_at: "2024-09-29T12:25:00Z",
  },
];

//대기중

export const dummyWaitingResponse = [
  {
    id: 1,
    user: {
      name: "영신",
      phone_number: "010-1234-5678",
    },
    party_size: 4,
    waiting_status: "waiting",
    ready_to_confirm_at: null,
    confirmed_at: null,
    canceled_at: null,
    confirm_due_time: "00:00",
    arrival_due_time: "00:00",
  },
  {
    id: 3,
    user: {
      name: "지윤",
      phone_number: "010-1234-5678",
    },
    party_size: 2,
    waiting_status: "waiting",
    ready_to_confirm_at: null,
    confirmed_at: null,
    canceled_at: null,
    confirm_due_time: "00:00",
    arrival_due_time: "00:00",
  },
];

//호출중

export const dummyCallingResponse = [
  {
    id: 1,
    waiting_status: "confirmed",
    party_size: 4,
    user: {
      user_id: 1,
      name: "John Smith",
      phone_number: "010-1234-5678",
    },
    confirm_due_time: undefined,
    arrival_due_time: undefined,
    registered_at: "2024-09-29T12:00:00Z",
  },
  {
    id: 2,
    waiting_status: "ready_to_confirm",
    party_size: 6,
    user: {
      user_id: 2,
      name: "Jane Doe",
      phone_number: "010-9876-5432",
    },
    confirm_due_time: "2024-10-01T14:45:00Z",
    arrival_due_time: undefined,
    registered_at: "2024-09-29T12:05:00Z",
  },
  {
    id: 3,
    waiting_status: "confirmed",
    party_size: 2,
    user: {
      user_id: 3,
      name: "Alice Kim",
      phone_number: "010-2222-3333",
    },
    confirm_due_time: "2024-10-01T15:00:00Z",
    arrival_due_time: "2024-10-01T15:05:00Z",
    registered_at: "2024-09-29T12:10:00Z",
  },
  {
    id: 4,
    waiting_status: "confirmed",
    party_size: 3,
    user: {
      user_id: 4,
      name: "Bob Lee",
      phone_number: "010-4444-5555",
    },
    confirm_due_time: undefined,
    arrival_due_time: undefined,
    registered_at: "2024-09-29T12:15:00Z",
  },
  {
    id: 5,
    waiting_status: "confirmed",
    party_size: 2,
    user: {
      user_id: 5,
      name: "Charlie Park",
      phone_number: "010-6666-7777",
    },
    confirm_due_time: "2024-10-01T15:20:00Z",
    arrival_due_time: "2024-10-01T15:25:00Z",
    registered_at: "2024-09-29T12:20:00Z",
  },
  {
    id: 6,
    waiting_status: "confirmed",
    party_size: 5,
    user: {
      user_id: 6,
      name: "David Choi",
      phone_number: "010-8888-9999",
    },
    confirm_due_time: undefined,
    arrival_due_time: undefined,
    registered_at: "2024-09-29T12:25:00Z",
  },
];

//입장완료
export const dummyArrivedResponse = [
  {
    id: 1,
    waiting_status: "arrived",
    party_size: 4,
    user: {
      user_id: 1,
      name: "John Smith",
      phone_number: "010-1234-5678",
    },
    confirm_due_time: undefined,
    arrival_due_time: undefined,
    registered_at: "2024-09-29T12:00:00Z",
  },
  {
    id: 2,
    waiting_status: "arrived",
    party_size: 6,
    user: {
      user_id: 2,
      name: "Jane Doe",
      phone_number: "010-9876-5432",
    },
    confirm_due_time: "2024-10-01T14:45:00Z",
    arrival_due_time: undefined,
    registered_at: "2024-09-29T12:05:00Z",
  },
  {
    id: 3,
    waiting_status: "arrived",
    party_size: 2,
    user: {
      user_id: 3,
      name: "Alice Kim",
      phone_number: "010-2222-3333",
    },
    confirm_due_time: "2024-10-01T15:00:00Z",
    arrival_due_time: "2024-10-01T15:05:00Z",
    registered_at: "2024-09-29T12:10:00Z",
  },
];

//대기 취소

export const dummyCanceledResponse = [
  {
    id: 1,
    waiting_status: "canceled",
    party_size: 4,
    user: {
      user_id: 1,
      name: "John Smith",
      phone_number: "010-1234-5678",
    },
    confirm_due_time: undefined,
    arrival_due_time: undefined,
    registered_at: "2024-09-29T12:00:00Z",
  },
  {
    id: 2,
    waiting_status: "canceled",
    party_size: 6,
    user: {
      user_id: 2,
      name: "Jane Doe",
      phone_number: "010-9876-5432",
    },
    confirm_due_time: "2024-10-01T14:45:00Z",
    arrival_due_time: undefined,
    registered_at: "2024-09-29T12:05:00Z",
  },
];
